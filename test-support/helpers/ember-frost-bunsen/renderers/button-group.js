import {expect} from 'chai'
import Ember from 'ember' // eslint-disable-line
import {$hook} from 'ember-hook'

import {
  expectBunsenInputNotToHaveError,
  expectBunsenInputToHaveError,
  expectLabel
} from './common'

const assign = Object.assign || Ember.assign || Ember.merge // eslint-disable-line

export function expectWithState (bunsenId, state) {
  const hook = state.hook || 'bunsenForm'
  const hookName = `${hook}-${bunsenId}`
  const $renderer = $hook(hookName).first()

  const defaults = {
    buttons: [],
    size: 'medium'
  }

  state = assign(defaults, state)

  expect(
    $renderer,
    'renders a bunsen button-group input'
  )
    .to.have.class('frost-bunsen-input-button-group')

  const $buttons = $renderer.find('.frost-button')

  expect(
    $buttons,
    'renders expected number of buttons'
  )
    .to.have.length(state.buttons.length)

  state.buttons
    .forEach((text, index) => {
      const $button = $buttons.eq(index)

      expect(
        $button.text().trim(),
        `button at index ${index} has expected text`
      )
        .to.equal(text)

      expect(
        $button,
        `button at index ${index} is correct size`
      )
        .to.have.class(state.size)
    })

  if (state.label) {
    expectLabel($renderer, state.label)
  }

  if (state.error) {
    expectBunsenInputToHaveError(bunsenId, state.error, hook)
  } else {
    expectBunsenInputNotToHaveError(bunsenId, hook)
  }
}
