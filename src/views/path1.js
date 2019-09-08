import XRender from '@/packages/XRender'
import About from './About.1.vue'
const componentConfig = {
  property: {
    
  }

}


var ab =  XRender({
  view: {
    tag: 'div',
    property: {
      nativeOn: {
        click: function () {
          console.log('this', this)
        }
      }
    },
    children: ['bbbdbdbdbd']
  }
})


export default XRender({
  
  view: {
    tag: 'about',
    property: {
      on: {
        click: 'handlerClick'
      },
      props: {
      }
    },
    children: [
      {
        tag: 'ab',
        property: {
          attrs: {
            value: 'aa'
          }
        }
      },
      {
        tag: 'about', 
        property: {
          props: {
            a: function () {
              return this.a
            }
          }
        }
      },
      {tag: 'about'},
      {tag: 'about'},
    ],
    created() {},
    mounted() {}
  },
  data() {
    return {
      a: 'aaaaaa',
      b: 'bbbbbb'
    }
  },
  components: {
    about: About,
    ab
  },
  methods: {
    handlerClick() {
      console.log('handlerClick')
    }
  }
})

