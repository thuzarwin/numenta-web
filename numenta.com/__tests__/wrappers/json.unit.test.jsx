import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import context from '../../__mocks__/reactContextMock'

import Json from '../../wrappers/json'

const route = {
  page: {
    data: {},
    file: {},
    path: '',
  },
}


describe('JSON Wrapper React component', () => {

  it('Renders correctly', () => {
    const JsonStubbed = stubContext(Json, context)
    const component = renderer.create(
      <JsonStubbed route={route}>
        ["hello": "world"]
      </JsonStubbed>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})