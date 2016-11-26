//import {computedFrom} from 'aurelia-framework';

import {HttpClient} from 'aurelia-fetch-client'
import {inject, Lazy, bindable} from 'aurelia-framework';
import $ from 'jquery'
import {typed} from 'typed.js'


export class Search {


  bind() {
    $(this.txtEdit1).typed({
      strings: ["Maths Probability.", "Java Programming","Dance classes"],
      typeSpeed: 5,
      loop: true
    });
  }

}

