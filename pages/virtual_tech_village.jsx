import React, { useState, useRef, useEffect, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import jwt_decode from "jwt-decode";

import Complete_Profile from "./components/alerts/completeProfile";
import MemberProfile from "./components/profiles/MemberProfile";
import ExpandedProfileModal from "./components/profiles/ExpandedProfileModal";

import { motion, AnimatePresence } from "framer-motion";
import { JellyTriangle } from "@uiball/loaders";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";

const CompanyProfile = ({
  company_name,
  image,
  industry,
  company_description,
  website,
  showCompany,
  user_id,
}) => {
  const showCompanyProfile = () => {
    showCompany({
      image,
      industry,
      company_name,
      company_description,
      website,
      user_id,
    });
  };

  return (
    <div className="block" onClick={showCompanyProfile}>
      <img
        alt={company_name}
        src={image}
        className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72  transition-opacity opacity-0 duration-[1.2s]"
        onLoad={(event) => event.target.classList.remove("opacity-0")}
      />

      <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
        <strong className="font-medium">{company_name}</strong>

        <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

        <p className="mt-0.5 opacity-50 sm:mt-0">{industry}</p>
      </div>
    </div>
  );
};

const ExpandedCompanyModal = ({
  industry,
  image,
  company_name,
  company_description,
  website,
  user_id,
}) => {
  return (
    <>
      <div className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 bg-white">
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <div className="sm:flex sm:justify-between sm:gap-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
              {company_name}
            </h3>

            <p className="mt-1 text-xs font-medium text-gray-600">{industry}</p>
          </div>

          <div className="hidden sm:block sm:shrink-0">
            <img
              alt={company_name}
              src={image}
              className="h-16 w-16 rounded-lg object-cover shadow-sm"
            />
          </div>
        </div>

        <div className="mt-4">
          <p className="max-w-[40ch] text-sm text-gray-500">
            {company_description}
          </p>
        </div>

        <div className="mt-6 flex gap-4 sm:gap-6">
          <div className="flex gap-4 font-medium text-gray-900">
            <a
              href={`${website}`}
              target="_blank"
              className=""
            >
              <FaExternalLinkSquareAlt />
              {/* THIS NEEDS TO BE FIXED ASAP */}
            </a>

            <Link href={`/company_info/${user_id}`}>
              <BsFillInfoCircleFill />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const Virtual_Tech_Village = () => {
  const [memberShow, setMemberShow] = useState(true);
  const [companyShow, setCompanyShow] = useState(false);
  const [parent, enableAnimations] = useAutoAnimate();
  const [profile, setProfile] = useState(false);
  const [company, setCompany] = useState(false);
  const [incompleteProfile, setIncompleteProfile] = useState(false);
  const [incompleteCompanyProfile, setIncompleteCompanyProfile] =
    useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const expandedProfileRef = useRef(null);
  const expandedCompanyRef = useRef(null);

  const [talentPages, setTalentPages] = useState([]);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [memberList, setMemberList] = useState(null);
  const [activePage, setActivePage] = useState(1);

  const router = useRouter();
  const { data: session } = useSession();

  const login = () => {
    if (session) {
      localStorage.setItem("token", session.access);
      // console.log(session);
    }

    const token = localStorage.getItem("token");

    const decodedToken = jwt_decode(token);
    const id = decodedToken.user_id;

    setUser(decodedToken);
    // console.log(decodedToken);

    const fetchData = async () => {
      const body = {
        page: "1",
      };
      const response = await fetch(
        `https://baobabpad-334a8864da0e.herokuapp.com/village/village_profiles/${id}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      const data = await response.json();
      setMemberList(data);

      const accountType = data.user[0]?.account_type || "";

      setCompanyShow(accountType === "village company profile");
      setMemberShow(accountType !== "village company profile");
    };

    fetchData();

    setIsLoading(false);
  };

  useEffect(() => {
    console.log(memberList);
    checkProfileComplete()
  }, [memberList]);

  const { companies, individuals } = memberList || {
    companies: [],
    individuals: [],
  };

  const handleClickOutsideProfile = (event) => {
    if (
      expandedProfileRef.current &&
      !expandedProfileRef.current.contains(event.target)
    ) {
      setProfile(false);
    }
  };

  const handleClickOutsideCompany = (event) => {
    if (
      expandedCompanyRef.current &&
      !expandedCompanyRef.current.contains(event.target)
    ) {
      setCompany(false);
    }
  };

  const handleMoreInfoClick = (modalId) => {
    router.push(`/member_info/${modalId}`);
  };

  const handleChatClick = (modalId) => {
    router.push(
      `/inbox/${memberList.user[0].user_id}/${modalId}`
    );
  };

  const checkProfileComplete = () => {
    if (
      memberList &&
      memberList.user[0]?.is_profile_complete === "False" &&
      memberList.user[0]?.account_type === "village talent profile"
    ) {
      setIncompleteProfile(true);
    }

    if (memberList) {
      if (
        memberList.user[0]?.is_profile_complete === "False" &&
        memberList.user[0]?.account_type === "village company profile"
      ) {
        setIncompleteCompanyProfile(true);
      }
    }
  };

  const profileReroute = () => {
    router.push("/complete_profile");
  };

  const companyProfileReroute = () => {
    router.push("/complete_company_profile");
  };

  const handlePageFetch = () => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await fetch(
          `https://baobabpad-334a8864da0e.herokuapp.com/village/pagination/2/`
        );
        if (!response.ok) {
          throw new Error("Network response was not okay");
        }
        const data = await response.json();
        // console.log(data);

        const pages = Array.from(
          { length: data.talent_total_pages },
          (_, index) => index + 1
        );
        setTalentPages(pages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDataFromAPI();
  };

  const handlePageClick = (pageNumber) => {
    setMemberList(null);
    const token = localStorage.getItem("token");

    const decodedToken = jwt_decode(token);
    const id = decodedToken.user_id;

    setUser(decodedToken);
    console.log(decodedToken);

    const fetchData = async () => {
      const body = {
        page: pageNumber.toString(),
      };
      const response = await fetch(
        `https://baobabpad-334a8864da0e.herokuapp.com/village/village_profiles/${id}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      const data = await response.json();

      setMemberList(data);

      setActivePage(pageNumber);
    };

    fetchData();

    setIsLoading(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideProfile);
    document.addEventListener("mousedown", handleClickOutsideCompany);

    ;

    login();
    handlePageFetch();
    

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideProfile);
      document.removeEventListener("mousedown", handleClickOutsideCompany);
    };
  }, []);

  const handleMemberShow = () => {
    if (!memberShow) {
      enableAnimations(true);
      setCompanyShow(false);
      setMemberShow(true);
    }
  };

  const handleCompanyShow = () => {
    if (!companyShow) {
      enableAnimations(true);
      setMemberShow(false);
      setCompanyShow(true);
    }
  };

  const [filters, setFilters] = useState({
    country: "",
    search: "",
    skill: "",
  });

  const handleInputChange = async (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setFilters({
      ...filters,
      [name]: value,
    });

    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    const id = decodedToken.user_id;

    try {
      const response = await fetch(
        `https://baobabpad-334a8864da0e.herokuapp.com/village/talent_search/${id}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ filters }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const pages = Array.from(
          { length: data.talent_total_pages },
          (_, index) => index + 1
        );

        setMemberList(data);
        console.log(data);
      } else {
        console.error("Something went wrong, please try again!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const uniqueCountries = Array.from(new Set(individuals)).map(
    (profile) => profile.country
  );

  const uniqueRoles = Array.from(new Set(individuals)).map(
    (profile) => profile.skills
  );

  if (!memberList) {
    return (
      <div className="flex h-screen items-center justify-center ">
        <JellyTriangle size={40} color="#231F20" />
      </div>
    );
  }

  const filteredData = individuals.filter((profile) => {
    const countryFilter = filters.country
      ? profile.country === filters.country
      : true;
    const searchFilter = filters.search
      ? profile?.first_name
          .toLowerCase()
          .includes(filters.search.toLocaleLowerCase()) ||
        profile.last_name
          .toLocaleLowerCase()
          .includes(filters.search.toLocaleLowerCase())
      : true;
    const skillFilter = filters.skill
      ? profile.skills.toLowerCase() === filters.skill.toLowerCase()
      : true;

    return countryFilter && searchFilter && skillFilter;
  });

  const itemsPerPage = 20;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleData = filteredData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const filteredCompanyData = companies.filter((profile) => {
    const countryFilter = filters.country
      ? profile.country === filters.country
      : true;
    const searchFilter = filters.search
      ? profile.first_name
          .toLowerCase()
          .includes(filters.search.toLocaleLowerCase()) ||
        profile.last_name
          .toLocaleLowerCase()
          .includes(filters.search.toLocaleLowerCase())
      : true;
    const skillFilter = filters.skill
      ? profile.skills.toLowerCase() === filters.skill.toLowerCase()
      : true;

    return countryFilter && searchFilter && skillFilter;
  });

  const itemsPerCompanyPage = 12;
  const startCompanyIndex = (currentPage - 1) * itemsPerCompanyPage;
  const endCompanyIndex = startCompanyIndex + itemsPerCompanyPage;

  const visibleCompanyData = filteredCompanyData.slice(
    startCompanyIndex,
    endCompanyIndex
  );

  // const totalCompanyPages = Math.ceil(filteredData.length / itemsPerPage);

  const showProfile = (memberInfo) => {
    enableAnimations(true);
    setProfile(memberInfo);
  };

  const hideProfile = () => {
    enableAnimations(true);
    setProfile(false);
  };

  const showCompany = (companyInfo) => {
    enableAnimations(true);
    setCompany(companyInfo);
  };

  return (
    <div className="flex flex-col gap-5 relative" ref={parent}>
      <div className="flex flex-col md:flex-row md:justify-between md:flex-wrap gap-2">
        <div className="flex flex-wrap gap-4">
          {(memberList.user[0].account_type === "village talent profile" || memberList.user[0].account_type === "village admin profile") && (
            <div
              className={` pb-1 w-max cursor-pointer  ${
                memberShow
                  ? "border-b-2 border-black"
                  : "hover:border-b-2 hover:border-gray-300 delay-200 ease-in-out transition-colors"
              }`}
              onClick={handleMemberShow}
            >
              Members{" "}
              <span className="bg-black text-white rounded p-1">
                {memberList.total_talent_profiles}
              </span>
            </div>
          )}

          {(memberList.user[0]?.account_type === "village company profile" || memberList.user[0].account_type === "village admin profile") && (
            <div
              className={`"pb-1 w-max cursor-pointer ${
                companyShow
                  ? "border-b-2 border-black"
                  : "hover:border-b-2 hover:border-gray-300 delay-200 ease-in-out transition-colors"
              }`}
              onClick={handleCompanyShow}
            >
              Companies{" "}
              <span className="bg-black text-white rounded p-1">
                {memberList.total_company_profiles}
              </span>
            </div>
          )}
        </div>

        <div className="flex-grow flex-wrap">
          <form className="flex flex-col md:flex-row md:justify-around">
            <div className="mb-4 md:mb-0">
              <select
                name="country"
                id="country"
                className="border-gray-300 border-2 rounded px-1 w-full"
                onChange={(e) => handleInputChange(e)}
                value={filters.country}
              >
                <option value="" disabled>
                  Country
                </option>
                <option value="">All</option>

                {uniqueCountries.map((country, index) => (
                  <option value={country} key={index}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4 md:mb-0">
              <input
                type="text"
                placeholder="Search by name"
                className="border-gray-300 border-2 rounded px-1 w-full"
                onChange={(e) => handleInputChange(e)}
                name="search"
                id="search"
                value={filters.search}
              />
            </div>

            <div>
              <select
                name="skill"
                id="skills"
                className="border-gray-300 border-2 rounded px-1 w-full"
                onChange={(e) => handleInputChange(e)}
                value={filters.skill}
              >
                <option value="" disabled>
                  Skills
                </option>
                <option value="">All</option>
                {uniqueRoles.map((role, index) => (
                  <option key={index} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>
          </form>
        </div>

        {/* {incompleteProfile && (
            <div className="fixed inset-0 flex items-center justify-center z-[99] bg-slate-900  bg-opacity-20 transition delay-150 backdrop-blur-sm">
              <Complete_Profile
                message="Your profile is incomplete! Please complete setting up your profile."
                alertDismiss={profileReroute}
              />
            </div>
          )} */}

        {incompleteCompanyProfile && (
          <div className="fixed inset-0 flex items-center justify-center z-[99] bg-slate-900  bg-opacity-20 transition delay-150 backdrop-blur-sm">
            <Complete_Profile
              message="Your profile is incomplete! Please complete setting up your profile."
              alertDismiss={companyProfileReroute}
            />
          </div>
        )}
      </div>
      {(memberList.user[0]?.account_type === "village talent profile" || memberList.user[0].account_type === "village admin profile") && (
        <AnimatePresence>
          {memberShow && (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {filteredData.length === 0 ? (
                <p className="font-bold text-slate-600 text-lg col-span-3 text-center">
                  No profiles match your filter criteria.
                </p>
              ) : (
                visibleData.map((profile, index) => (
                  <MemberProfile
                    key={index}
                    image={profile.image}
                    name={`${profile.first_name} ${profile.last_name}`}
                    skills={profile.skills}
                    showProfile={showProfile}
                    country={profile.country}
                    experience={profile.experience}
                    certificate={profile.certificate}
                    user_id={profile.user_id}
                  />
                ))
              )}
              <AnimatePresence>
                {profile && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 flex items-center justify-center z-[99] bg-slate-900  bg-opacity-20 transition delay-150 backdrop-blur-sm"
                  >
                    <div ref={expandedProfileRef}>
                      <ExpandedProfileModal
                        image={profile.image}
                        name={profile.name}
                        skills={profile.skills}
                        hideProfile={hideProfile}
                        country={profile.country}
                        certificate={profile.certificate}
                        experience={profile.experience}
                        onClick={() => {
                          handleMoreInfoClick(profile.user_id);
                        }}
                        handleChat={() => {
                          handleChatClick(profile.user_id);
                        }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
          {memberShow && (
            <div className="flex w-full justify-center items-center gap-2">
              {talentPages.map((pageNumber) => (
                <div className="flex gap-2" key={pageNumber}>
                  <button
                    onClick={() => handlePageClick(pageNumber)}
                    className={`inline-block rounded-full border border-[#256B58] p-3 transition-colors delay-75 ${
                      pageNumber === activePage
                        ? "bg-transparent text-[#256B58] cursor-not-allowed"
                        : "text-white bg-[#256B58]"
                    }  hover:bg-transparent hover:text-[#256B58] focus:outline-none focus:ring active:text-indigo-500`}
                    disabled={activePage === pageNumber}
                  >
                    {pageNumber}
                  </button>
                </div>
              ))}
            </div>
          )}
        </AnimatePresence>
      )}

      <AnimatePresence>
        {companyShow && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative"
          >
            {filteredCompanyData.length === 0 ? (
              <p className="font-bold text-slate-600 text-lg col-span-3 text-center">
                No company profiles match your filter criteria.
              </p>
            ) : (
              visibleCompanyData.map((company, index) => (
                <CompanyProfile
                  key={index}
                  company_name={company.company_name}
                  image={company.image}
                  industry={company.industry}
                  showCompany={showCompany}
                  company_description={company.company_description}
                  website={company.company_website}
                  user_id={company.user_id}
                />
              ))
            )}

            <AnimatePresence>
              {company && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 flex items-center justify-center z-[99] bg-slate-900  bg-opacity-20 transition delay-150 backdrop-blur-sm"
                >
                  <div ref={expandedCompanyRef}>
                    <ExpandedCompanyModal
                      company_name={company.company_name}
                      image={company.image}
                      company_description={company.company_description}
                      industry={company.industry}
                      website={company.website}
                      user_id={company.user_id}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Virtual_Tech_Village;
