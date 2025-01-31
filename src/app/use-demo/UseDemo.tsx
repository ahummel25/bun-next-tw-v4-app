'use client'

import React from 'react'
import { useUsers } from '@/hooks/useUsers'
import { UserTable } from './UserTable'
import Loading from '@/components/Loading' // Import the Loading component
import Error from '@/components/Error' // Import the Error component

export default function UseDemo() {
  const { data, isLoading, error } = useUsers()

  if (isLoading || (!data && !error)) return <Loading />

  if (error || data?.error) {
    return <Error message={data?.error || 'Error fetching users'} /> // Use the Error component
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="mb-4 text-2xl font-bold">User Data</h2>
      <div className="relative">
        <UserTable data={data} />
      </div>
      {/* <div className="relative">
				<UserTable data={data} />
			</div>
			<div className="relative">
				<UserTable data={data} />
			</div>
			<div className="relative">
				<UserTable data={data} />
			</div>
			<div className="relative">
				<UserTable data={data} />
			</div> */}
    </div>
  )
}
