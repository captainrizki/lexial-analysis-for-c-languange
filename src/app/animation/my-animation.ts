import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const fadeInAnimation = trigger('openClose', [
  state(
    'open',
    style({
      height: '450px',
      opacity: 1,
    })
  ),
  state(
    'closed',
    style({
      height: '0px',
      opacity: 0,
    })
  ),
  transition('open <=> closed', [animate('1s')]),
]);

export const titleAnimation = trigger('myAnimation', [
  state(
    'open',
    style({
      top: '10px',
      left: '10px',
      opacity: 1,
    })
  ),
  state(
    'closed',
    style({
      top: '0px',
      left: '0px',
    })
  ),
  transition('open <=> closed', [animate('0.5s')]),
]);
