import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const LinkWithQuery = (props) => {
  const query = useLocation().search
  if (typeof(props.to) === 'string') {
    return <Link {...props} to={ `${props.to}${query}` }>
      { props.children }
    </Link>
  } else {
    return <Link {...props} to={{...props.to, search: query }} >
      { props.children }
    </Link>
  }
}

export default LinkWithQuery