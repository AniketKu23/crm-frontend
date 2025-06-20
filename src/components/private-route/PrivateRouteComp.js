import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { DefaultLayout } from '../../layout/DefaultLayout'

const isAuth = true

export const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth ? (
          <DefaultLayout>{children}</DefaultLayout>
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}