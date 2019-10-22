import {Breadcrumb as BootStrapBreadcrumb} from 'react-bootstrap/'
import React, {useEffect} from 'react'

const Breadcrumb = props => {
  useEffect(() => {
    console.log(props)
  }, [props])

  return (
    <BootStrapBreadcrumb>
      {props.categories.map((category, index) => (
        <BootStrapBreadcrumb.Item href="#" key={index}>
          {category.label}
        </BootStrapBreadcrumb.Item>
      ))}
    </BootStrapBreadcrumb>
  )
}

export default Breadcrumb
