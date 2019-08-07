import * as TempTween from 'tween.js/src/Tween.js';
// plagiarism from https://github.com/tweenjs/tween.js
((window as Object) as { TWEEN: unknown }).TWEEN = TempTween;

export const getAll = TWEEN.getAll;
export const add = TWEEN.add;
export const remove = TWEEN.remove;
export const update = TWEEN.update;
export const now = TWEEN.now;

export const Tween = TWEEN.Tween;
export const Group = TWEEN.Group;

export const Easing: Easing = TWEEN.Easing;
export const Interpolation: Interpolation = TWEEN.Interpolation;
