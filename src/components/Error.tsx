type ErrorProps = {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => (
  <div className="mt-[-20vh] flex min-h-screen items-center justify-center">
    <div className="py-4 text-center text-red-500">{message || 'Something went wrong'}</div>
  </div>
)

export default Error
