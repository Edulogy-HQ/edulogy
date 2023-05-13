export function Card(props) {
  return (
    <div className="p-4 rounded-lg shadow-lg  bg-white">
      {props.children}
    </div>
  )
}

export function CardGrid(props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {props.children}
    </div>
  )
}