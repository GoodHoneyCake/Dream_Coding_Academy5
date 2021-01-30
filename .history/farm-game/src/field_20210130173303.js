"use strict";

export default class Field {
  constructor(carroutCount, bugCount) {
    this.carroutCount = carroutCount;
    this.bugCount = bugCount;
    this.field = document.querySelector(".game__field");
    this.fieldRect = field.getBoundingClientRect();
  }
}
