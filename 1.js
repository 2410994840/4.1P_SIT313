import React, { Component, createRef } from 'react'
import { Input, Button } from 'semantic-ui-react'
class Search extends Component {
  inputRef = createRef()
  handleClick = () => this.inputRef.current.focus()
  render() {
    return (
      <div>
        <Button content='DEV@deakin' onClick={this.handleClick} />
        <Input ref={this.inputRef} placeholder='Search...' />
        <Button content='POST' onClick={this.handleClick} />
        <Button content='LOGIN' onClick={this.handleClick} />
      </div>
    )
  }
}
export default Search