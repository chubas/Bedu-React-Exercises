import styled from 'styled-components'
import React, { Fragment, useState } from 'react'
import { useQueryParam, NumberParam } from 'use-query-params'

const Tabs = (props) => {

  const [tab, setTab] = useQueryParam('tab', NumberParam)

  // Hook usado para determinar el índice del tab activo.
  // Si existe uno indicado por el parámetro `tab` usará ese, de lo contrario el default es 0
  const [active, setActive] = useState(tab || 0)

  const changeTab = (index) => {
    if (index !== active) {
      setActive(index)
      setTab(index, 'push')
    }
  }

  return (
    <Fragment>
      <StyledTabs>
        { props.children.map((tab, index) => {
          return (
            <Tab onClick={ () => { changeTab(index) } } active={ active === index } key={ `tab-${index}` }>
              { tab.props.title }
            </Tab>
          )
        })}
      </StyledTabs>
      { props.children.map((tab, index) => {
        return (
          <Fragment key={ `c-${index}` }>
            { active === index && (<Content key={ `content-${index}` }>
                { tab.props.children }
              </Content>)
            }
          </Fragment>
        )
      })}
    </Fragment>
  )
}

const StyledTabs = styled.div`
  overflow: hidden;
  background: #fff;
  font-family: "Open Sans", Arial, sans-serif;
  height: 3em;
  display: flex;
`

const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  flex-grow: 1;
  flex-basis: 100%;

  font-size: 1em;
  border: ${props => (props.active ? "1px solid khaki" : "")};
  border-bottom: ${props => (props.active ? "none" : "")};
  border-radius: 5px 5px 0 0;
  background-color: ${props => (props.active ? "lightyellow" : "whitesmoke")};
  height: ${props => (props.active ? "3em" : "2.6em; top:.4em")};
  transition: background-color 0.2s ease-in-out;

  :hover {
    background-color: ${props => (props.active ? '#FFFFCC' : 'white')};
  }
`

const Content = styled.div`
  display: ${props => props.active ? 'block' : 'block' };
`

export { Tabs, Tab, Content }