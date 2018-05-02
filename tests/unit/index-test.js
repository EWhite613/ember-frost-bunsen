import {expect} from 'chai'
import {describe, it} from 'mocha'

import {
  AbstractInput as _AbstractInput,
  ArrayContainer as _ArrayContainer,
  ArrayInlineItem as _ArrayInlineItem,
  ArrayTabContent as _ArrayTabContent,
  ArrayTabNav as _ArrayTabNav,
  Cell as _Cell,
  Detail as _Detail,
  Error as _Error,
  Form as _Form,
  InputWrapper as _InputWrapper,
  Inputs,
  Section as _Section,
  ValidationResult as _ValidationResult
} from 'ember-frost-bunsen'

import {default as ArrayContainer} from 'ember-frost-bunsen/components/array-container'
import {default as ArrayInlineItem} from 'ember-frost-bunsen/components/array-inline-item'
import {default as ArrayTabContent} from 'ember-frost-bunsen/components/array-tab-content'
import {default as ArrayTabNav} from 'ember-frost-bunsen/components/array-tab-nav'
import {default as Cell} from 'ember-frost-bunsen/components/cell'
import {default as Detail} from 'ember-frost-bunsen/components/detail'
import {default as Error} from 'ember-frost-bunsen/components/error'
import {default as Form} from 'ember-frost-bunsen/components/form'
import {default as InputWrapper} from 'ember-frost-bunsen/components/input-wrapper'
import {default as AbstractInput} from 'ember-frost-bunsen/components/inputs/abstract-input'
import {default as AutocompleteInput} from 'ember-frost-bunsen/components/inputs/autocomplete'
import {default as BooleanInput} from 'ember-frost-bunsen/components/inputs/boolean'
import {default as ButtonGroupInput} from 'ember-frost-bunsen/components/inputs/button-group'
import {default as CheckboxArrayInput} from 'ember-frost-bunsen/components/inputs/checkbox-array'
import {default as DateInput} from 'ember-frost-bunsen/components/inputs/date'
import {default as DatetimeInput} from 'ember-frost-bunsen/components/inputs/datetime'
import {default as ImageInput} from 'ember-frost-bunsen/components/inputs/image'
import {default as LinkInput} from 'ember-frost-bunsen/components/inputs/link'
import {default as MultiSelectInput} from 'ember-frost-bunsen/components/inputs/multi-select'
import {default as NumberInput} from 'ember-frost-bunsen/components/inputs/number'
import {default as PasswordInput} from 'ember-frost-bunsen/components/inputs/password'
import {default as PropertyChooserInput} from 'ember-frost-bunsen/components/inputs/property-chooser'
import {default as SelectInput} from 'ember-frost-bunsen/components/inputs/select'
import {default as StaticInput} from 'ember-frost-bunsen/components/inputs/static'
import {default as TextInput} from 'ember-frost-bunsen/components/inputs/text'
import {default as TextareaInput} from 'ember-frost-bunsen/components/inputs/textarea'
import {default as UrlInput} from 'ember-frost-bunsen/components/inputs/url'
import {default as Section} from 'ember-frost-bunsen/components/section'
import {default as ValidationResult} from 'ember-frost-bunsen/components/validation-result'

describe('Unit: ember-frost-bunsen', function () {
  it('imports AbstractInput', function () {
    expect(AbstractInput).to.equal(_AbstractInput)
  })

  it('imports ArrayContainer', function () {
    expect(ArrayContainer).to.equal(_ArrayContainer)
  })

  it('imports ArrayInlineItem', function () {
    expect(ArrayInlineItem).to.equal(_ArrayInlineItem)
  })

  it('imports ArrayTabContent', function () {
    expect(ArrayTabContent).to.equal(_ArrayTabContent)
  })

  it('imports ArrayTabNav', function () {
    expect(ArrayTabNav).to.equal(_ArrayTabNav)
  })

  it('imports BooleanInput', function () {
    expect(BooleanInput).to.equal(Inputs.Boolean)
  })

  it('imports ButtonGroupInput', function () {
    expect(ButtonGroupInput).to.equal(Inputs.ButtonGroup)
  })

  it('imports Cell', function () {
    expect(Cell).to.equal(_Cell)
  })

  it('imports CheckboxArrayInput', function () {
    expect(CheckboxArrayInput).to.equal(Inputs.CheckboxArray)
  })

  it('imports DateInput', function () {
    expect(DateInput).to.equal(Inputs.Date)
  })

  it('imports DatetimeInput', function () {
    expect(DatetimeInput).to.equal(Inputs.Datetime)
  })

  it('exports Detail', function () {
    expect(Detail).to.equal(_Detail)
  })

  it('exports Error', function () {
    expect(Error).to.equal(_Error)
  })

  it('exports Form', function () {
    expect(Form).to.equal(_Form)
  })

  it('exports InputWrapper', function () {
    expect(InputWrapper).to.equal(_InputWrapper)
  })

  it('exports ImageInput', function () {
    expect(ImageInput).to.equal(Inputs.Image)
  })

  it('exports LinkInput', function () {
    expect(LinkInput).to.equal(Inputs.Link)
  })

  it('exports MultiSelectInput', function () {
    expect(MultiSelectInput).to.equal(Inputs.MultiSelect)
  })

  it('exports NumberInput', function () {
    expect(NumberInput).to.equal(Inputs.Number)
  })

  it('exports PasswordInput', function () {
    expect(PasswordInput).to.equal(Inputs.Password)
  })

  it('exports PropertyChooserInput', function () {
    expect(PropertyChooserInput).to.equal(Inputs.PropertyChooser)
  })

  it('exports Section', function () {
    expect(Section).to.equal(_Section)
  })

  it('exports SelectInput', function () {
    expect(SelectInput).to.equal(Inputs.Select)
  })

  it('exports AutocompleteInput', function () {
    expect(AutocompleteInput).to.equals(Inputs.Autocomplete)
  })

  it('exports StaticInput', function () {
    expect(StaticInput).to.equal(Inputs.Static)
  })

  it('exports TextInput', function () {
    expect(TextInput).to.equal(Inputs.Text)
  })

  it('exports TextareaInput', function () {
    expect(TextareaInput).to.equal(Inputs.Textarea)
  })

  it('exports UrlInput', function () {
    expect(UrlInput).to.equal(Inputs.Url)
  })

  it('exports ValidationResult', function () {
    expect(ValidationResult).to.equal(_ValidationResult)
  })
})
