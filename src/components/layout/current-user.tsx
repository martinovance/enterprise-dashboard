import React from 'react'
import { Popover, Button } from 'antd'
import CustomAvatar from '../custom-avatar'
import { useGetIdentity } from '@refinedev/core'

import type { User } from '@/graphql/schema.types'

const CurrentUser = () => {
  const { data: user } = useGetIdentity<User>()
  const name = 'PM'

  return (
    <>
      <Popover
        placement='bottomRight'
        trigger="click"
        overlayInnerStyle={{ padding: 0 }}
        overlayStyle={{ zIndex: 999 }}
      >
        <CustomAvatar name={name} />
      </Popover>
    </>
  )
}

export default CurrentUser