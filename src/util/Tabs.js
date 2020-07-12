import styled from 'styled-components'
import React, { useState } from 'react'
import { useQueryParam, NumberParam } from 'use-query-params'

/*
 * El componente Tabs es un auxiliar para poder renderear cada ejercicio en un tab diferente
 * dentro de la misma página. También es un ejemplo de cómo usar `styled-components`
 */
const Tabs = (props) => {

  // Obtenemos el parámetro del query `tab` para poder usar Routers en los ejercicios sin
  // perder el tab actual (e.g. `?tab=0`)
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
    // El uso de `<>` es equivalente a usar `<Fragment>`. Son equivalentes, aunque algunos editores
    // con versiones viejas de React puede que no soporten esta sintaxis
    <>
      <StyledTabs>
        { props.children.map((tab, index) => {
          return (
            <Tab onClick={ () => { changeTab(index) } } active={ active === index } key={ `tab-${index}` }>
              { tab.props.title }
            </Tab>
          )
        })}
      </StyledTabs>
      { props.children[active].props.children }
    </>
  )
}

const StyledTabs = styled.div`
  overflow: hidden;
  background: #fff;
  font-family:  'Open Sans ', Arial, sans-serif;
  height: 3em;
  display: flex;
  margin-bottom: 20px;
`

const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  flex-grow: 1;
  flex-basis: 100%;

  font-size: 1em;
  border: ${props => (props.active ?  '2px solid #F0E68C ' :  '1px solid #f7f2c1 ')};
  border-bottom: ${props => (props.active ?  'none ' :  ' ')};
  border-radius: 5px 5px 0 0;
  background-color: ${props => (props.active ?  '#FFFFE0 ' :  '#F5F5F5 ')};
  height: ${props => (props.active ?  '3em ' :  '2.6em; top:.4em ')};
  transition: background-color 0.2s ease-in-out;

  :hover {
    background-color: ${props => (props.active ? '#FFFFCC' : '#FFFFFF')};
  }
`

export { Tabs, Tab }