export default {
    name: 'FlashMessage',
    props: [],
    data() {
        return {
            message: '',
            type: '',
            show_message: true
        };
    },
    methods: {
        show(message, type) {
            this.message = message;
            this.type = type;
            this.show_message = true
            setTimeout(() => { this.show_message = false; this.type = ''; this.message = ''; }, 2500);
        },
    },

    computed: {},
    created() {
    },
    template: `
    <Transition name="slide-fade" appear>
      <div v-if="show_message && type == 'alert'" class="z-[100] top-10 fixed w-full left-[-0.01%] flex justify-center pointer-events-none">
        <p class="min-w-[6rem] px-4 py-3 mx-[2%] md:mx-[5%] flex justify-center items-center shadow-lg rounded-[5px] bg-red-200 text-red-700 font-medium pointer-events-auto">
          <div class="w-5 h-5 mr-2">
            <svg class="w-5 h-5 fill-red-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
            </svg>
          </div>
          <span>
            {{ message }}
          </span>
        </p>
    </div>
    </Transition>

    <Transition name="slide-fade" appear>  
      <div v-if="show_message" v-show="type == 'notice'" class="z-[100] top-10 fixed left-[-0.01%] w-full flex justify-center pointer-events-none">
          <p class="min-w-[6rem] px-4 py-3 mx-[2%] md:mx-[5%] flex justify-center items-center shadow-lg rounded-[5px] bg-green-200 text-green-700 font-medium pointer-events-auto">
            <div class="w-5 h-5 mr-2">
                <svg class="w-5 h-5 fill-green-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
                </svg>
            </div>
            <span>
                {{ message }}
            </span>
          </p>
      </div>
    </Transition>
  `
};
