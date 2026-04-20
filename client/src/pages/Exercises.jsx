/* eslint-disable react/prop-types */

const ExerciseCard = ({ exercise }) => {
  return (
    <div className="w-80 bg-white rounded-2xl shadow-md border border-[#E6EFF2] hover:shadow-lg transition duration-300">

      <figure>
        <img
          className="h-64 w-full object-cover rounded-t-2xl"
          src={exercise.image}
          alt={exercise.name}
        />
      </figure>

      <div className="p-5">
        <h2 className="text-xl font-semibold text-[#457B9D] mb-2">
          {exercise.name}
        </h2>

        <p className="text-[#6C757D] leading-relaxed">
          {exercise.description}
        </p>
      </div>

    </div>
  );
};

const ExerciseList = ({ exercises }) => {
  return (
    <div className="flex justify-center gap-y-8 gap-x-8 flex-wrap mb-12">
      {exercises.map((exercise, index) => (
        <ExerciseCard key={index} exercise={exercise} />
      ))}
    </div>
  );
};

// Sample data
const exercises = [
  {
    name: 'Push-Ups',
    description: 'A basic upper-body strength exercise.',
    image: 'https://cdn.dribbble.com/users/4678719/screenshots/14534270/media/5c5ba4523e64cb0403719c1082b88062.gif',
  },
  {
    name: 'Squats',
    description: 'Great for building lower-body strength.',
    image: 'https://assets-v2.lottiefiles.com/a/6c1e386a-1177-11ee-9e8c-d3123faea87d/tShCtc2iOH.gif',
  },
  {
    name: 'Plank',
    description: 'An excellent core stability exercise.',
    image: 'https://assets-v2.lottiefiles.com/a/b8ff5496-4162-11ee-8471-fb5cac1c4de6/eWZZfv0tat.gif',
  },
  {
    name: 'Yoga',
    description: 'Gentle yoga poses and stretches that help relieve stress and tension in the body and mind.',
    image: 'https://cdn.dribbble.com/users/974028/screenshots/14943333/media/f0d927649fc3566932c7b7c209c901e0.gif',
  },
  {
    name: 'Deep Breathing',
    description: 'A calming exercise to reduce stress and anxiety by focusing on controlled, deep breaths.',
    image: 'https://assets-v2.lottiefiles.com/a/77d60888-1170-11ee-bda2-eb18eac93d30/VnTjL8fHwr.gif',
  },
  {
    name: 'Mountain Climbers',
    description: 'A dynamic exercise to improve core strength and cardiovascular endurance.',
    image: 'https://images.everydayhealth.com/images/healthy-living/fitness/mountain-climbers.gif?sfvrsn=e138039d_3',
  },
];

const App = () => {
  return (
    <div className="min-h-screen bg-[#F4F9F9] p-8">

      <h1 className="md:text-4xl text-2xl font-bold text-center text-[#457B9D] mb-10">
        Exercise & Wellness Hub
      </h1>

      <ExerciseList exercises={exercises} />

    </div>
  );
};

export default App;