import React from 'react'
import { ChannelContext, UserContext } from '../../App'


function ComponentC() {
  return (
    <div>
        <UserContext.Consumer>
            {user => {
                return (
                    <ChannelContext.Consumer>
                        {channel => {
                            return (
                                <div>
                                    User context value {user} {channel}
                                </div>
                            )
                        }}
                    </ChannelContext.Consumer>
                    
                )
            }}
        </UserContext.Consumer>
    </div>
  )
}

export default ComponentC