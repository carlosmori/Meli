import React from 'react'
import {Breadcrumb as BootStrapBreadcrumb} from 'react-bootstrap/'

const Breadcrumb = ({categories}) => {
  return (
    <BootStrapBreadcrumb>
      {categories.map((category, index) => (
        <BootStrapBreadcrumb.Item href="#" key={index}>
          {category.label}
        </BootStrapBreadcrumb.Item>
      ))}
    </BootStrapBreadcrumb>
  )
}

export default Breadcrumb
