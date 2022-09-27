import React from 'react'
import { MdError } from 'react-icons/md'
import TopBanner from '../../ui/banner/banner'

type errorProps = { error: any }

const Error = ({ error }: errorProps) => (
  <TopBanner
    icon={<MdError />}
    type="error"
    title={error.title}
    message={error.message}
  />
)

export default Error
