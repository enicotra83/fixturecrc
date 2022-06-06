export default function ItemFixture(props) {
  const { fecha } = props
  return (
    <>
      <tr>
        <td>{fecha.id}</td>
        <td>{fecha.fecha}</td>
        <td>{fecha.hora}</td>
        <td>{fecha.local}</td>
        <td>
          <img
            src={`../src/assets/statics/${fecha.localImg}`}
            width='50'
            alt={fecha.localImg}
          />
        </td>
        <td>
          <strong>{fecha.resultado}</strong>
        </td>
        <td>
          <img
            src={`../src/assets/statics/${fecha.visitanteImg}`}
            width='50'
            alt={fecha.localImg}
          />{' '}
        </td>
        <td>{fecha.visitante}</td>
        <td>
          <em>{fecha.referee}</em>
        </td>
      </tr>
    </>
  )
}
