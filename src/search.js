//import {computedFrom} from 'aurelia-framework';

import {HttpClient} from 'aurelia-fetch-client'
import {inject, Lazy, bindable} from 'aurelia-framework';
import $ from 'jquery'
import {typed} from 'typed.js'


export class Search {


  bind() {
    $(this.txtEdit1).typed({
      strings: ["First sentence.", "Second sentence."],
      typeSpeed: 0,
      loop: true
    });
  }

}

