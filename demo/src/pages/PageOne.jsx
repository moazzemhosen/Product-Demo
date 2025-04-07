import Navbar from '../components/Navbar';

function PageOne() {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl font-bold">Page One</h1>
        <p>Content for dataCollection.</p>
      </div>
    </div>
  );
}

export default PageOne;
