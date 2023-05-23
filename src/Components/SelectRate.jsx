export default function SelectRate ({rate, onBack}) {
  return (
    <div>
      <button onClick={()=>onBack(null)}>
        Назад к списку
      </button>
      <p>
        Тариф: {rate.title}
      </p>
      <p>
        Описание: {rate.body}
      </p>
      <button onClick={()=>onBack(null)}>
        Подключить тариф
      </button>
    </div>
  )
}