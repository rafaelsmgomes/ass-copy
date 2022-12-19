import React, { Children, memo, ReactElement, ReactNode, useMemo, useRef } from 'react'

const renderSlides = (props: any) => {
  let key
  let slides: ReactElement[] = []
  let preCloneSlides: any[] = []
  let postCloneSlides: any[] = []
  let childrenCount = Children.count(props.children)

  Children.forEach(props.children as ReactNode, (elem, idx) => {
    let childOnClickOptions = {}

    slides.push(
      React.cloneElement(elem as ReactElement, {
        key: `original-${idx}`,
        'data-index': idx,
        className: 'my-class',
        tabIndex: '-1',
      })
    )
  })
  return slides
}

export const Track = memo(({ children }: { children: ReactNode }) => {
  const slides = renderSlides(children)

  return <div>{slides}</div>
})
