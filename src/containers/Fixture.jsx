import { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import ItemFixture from '../components/ItemFixture'

export default function Fixture() {
  const [fixture, setFixture] = useState([])

  const getFixture = () => {
    fetch('./src/data/fixture.json')
      .then((response) => response.json())
      .then((data) => setFixture(data))
  }

  useEffect(() => {
    getFixture()
  }, [])
  return (
    <>
      <div className='fixture centrado'>
        <h2>Torneo Preparacion Austral 2022</h2>
        <Table responsive className='tabla table-hover align-middle'>
          <thead>
            <tr className='centrado'>
              <th>#</th>
              <th>Fecha</th>
              <th className='maxWidth'>Local</th>
              <th> </th>
              <th className='centrado'>Resultado</th>
              <th> </th>
              <th>Visitante</th>
              <th>Referee</th>
            </tr>
          </thead>
          <tbody>
            {fixture.map((fecha) => (
              <ItemFixture fecha={fecha} key={fecha.id} />
            ))}
          </tbody>
        </Table>
      </div>
    </>
  )
}
