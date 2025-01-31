import { useQuery } from '@tanstack/react-query'

const fetchUsers = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 2000)); // 2-second delay
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!response.ok) throw new Error('Failed to fetch users')
    return response.json()
  } catch (error) {
    return { error: (error as Error).message }
  }
}

export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    meta: { persist: true }
  })
}
