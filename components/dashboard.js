import {useSession, signOut} from 'next-auth/react';
import Header from './header';
import {Card, CardGrid} from './card';

function SessionCard(props) {
  return (
    <Card>
      <div className="flex justify-between items-center">
        <h2 className='mb-1 font-semibold'>{props.title}</h2>
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
      <p className='text-sm'>{props.description}</p>
    </Card>
  )
}

function Session() {
  return (
    <section className='mb-6'>
      <h1 className='text-2xl mb-4'>Your Sessions</h1>
      <CardGrid>
        <SessionCard title="Quantum Physics" description="We discussed about Bra-Ket Notation and Qubits" />
        <SessionCard title="Data Structures" description="We discussed about Trees, Types of trees, Binary Trees, AVL Trees" />
        <SessionCard title="Algorithms" description="We discussed about Djikstra's Algorithm, Breadth First Search, Depth First Search, A* Algo..." />
      </CardGrid>
    </section>
  )
}

function Menu() {
  return (
    <section className='my-6'>
      <h1 className='text-2xl mb-4'>Other Options</h1>
      <CardGrid>
        <SessionCard title="Create New Session" description="Create new session to learn about different topics of your choice" />
        <SessionCard title="Upload a file" description="Start by uploading your notes in form of pdf or word document" />
        <SessionCard title="Search in Notes" description="Search from a huge repository of crowd-sourced notes uploaded by students just like you." />
      </CardGrid>
    </section>
  )
}

export default function dashboard() {
  const {data: session} = useSession();
  console.log(session)
  return (
    <>
    <Header />
    <main className="flex flex-col min-h-screen p-10">
      <Session />
      <Menu />
    </main>
    </>
  )
}