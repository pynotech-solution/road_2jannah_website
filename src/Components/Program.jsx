import Program from './Program.jsx';

function Programs({ programs }) {
  return (
    <div id="programs" className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center text-teal-800 mb-6">Our Programs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((program, index) => (
          <Program key={index} title={program.title} description={program.description} donateText={program.donateText} image={program.image} alt={program.alt} />
        ))}
      </div>
    </div>
  );
}

export default Programs;