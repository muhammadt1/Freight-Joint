import { Image } from '@chakra-ui/react'

export default function Logo() {
  return (
      <Image
      width='200px'
      objectFit='cover'
      src='img/logo.svg'
      alt='Logo'
      />
  )
}