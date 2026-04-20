function Community() {
  const supportGroups = [
    {
      name: 'Reddit Mental Health Support',
      url: 'https://www.reddit.com/r/depression/',
      description:
        'A community where people share their experiences, advice, and support regarding mental health struggles.'
    },
    {
      name: '7 Cups - Free Online Therapy and Counseling',
      url: 'https://www.7cups.com/',
      description:
        'An online therapy and emotional support platform that connects users with licensed therapists or trained listeners.'
    },
    {
      name: 'National Tele Mental Health Program of India',
      url: 'https://telemanas.mohfw.gov.in/home',
      description:
        'An initiative by the Indian government to provide accessible mental health services across the country through digital platforms.'
    },
    {
      name: 'NAMI - National Alliance on Mental Illness',
      url: 'https://www.nami.org/Find-Support',
      description:
        'Offers resources and links to local peer support groups along with educational materials.'
    },
    {
      name: 'Mind - Mental Health Charity',
      url: 'https://www.mind.org.uk/',
      description:
        'A UK-based charity providing information, advice, and support for people experiencing mental health problems.'
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F9F9] flex flex-col items-center p-6">

      {/* Header */}
      <div className="text-center mb-12 mt-10 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-[#457B9D]">
          Community Support Resources
        </h2>

        <p className="text-lg mt-4 text-[#6C757D] leading-relaxed">
          Below are trusted external community support groups and resources
          that can provide help and guidance for mental health challenges.
        </p>
      </div>

      {/* Resource Cards */}
      <ul className="space-y-8 w-full max-w-3xl">
        {supportGroups.map((group, index) => (
          <li
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md border border-[#E6EFF2] hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-semibold text-[#457B9D] mb-2">
              <a
                href={group.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#81B29A] transition duration-300"
              >
                {group.name}
              </a>
            </h3>

            <p className="text-[#6C757D] leading-relaxed">
              {group.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Community;