import { headingSize } from '/tokens'
import Text from './Text'

function Heading({ children, size, ...props }) {
  const tag = `h${size}`

  return (
    <Text as={tag} size={headingSize[tag]} weight="300" {...props}>
      {children}
    </Text>
  )
}

export default Heading
