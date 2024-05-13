require 'open-uri'

class ScrapingController < ApplicationController
  def index
  end

  def scrape_url
    input_url = InputUrl.find_or_create_by(url: params[:url])
    html = URI.open(params[:url])
    doc = Nokogiri::HTML(html)

    scraped_urls = []
    doc.css('a').each do |link|
      url = link['href']
      if url.present?
        url = URI.join(params[:url], url).to_s unless url.starts_with?('http')
        scraped_urls << { url: url, anchor_text: link.text.strip }
      end
    end

    input_url.scraped_urls.destroy_all

    input_url.scraped_urls.create(scraped_urls)
    render json: { success: true, list: input_url.scraped_urls.map { |url| { url: url.url, anchor_text: url.anchor_text } } }
  rescue SocketError => e
    render json: { error: "Error: DNS resolution failed. Please check your network connection or try again later." }, status: :unprocessable_entity
  rescue StandardError => e
    render json: { error: "Error: #{e.message}" }, status: :unprocessable_entity
  end


end
