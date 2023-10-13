import React from "react";
import Layout from "../components/layouts/layout";
import { BiLinkExternal } from "react-icons/bi";

const Company_info = () => {
  return (
    <Layout sideHighlight="Tech Village">
      <table className="table-auto border rounded-md w-full">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-2 px-4">Position</th>
            <th className="py-2 px-4">Job type</th>
            <th className="py-2 px-4">Link</th>
            <th className="py-2 px-4">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-100">
            <td className="py-2 px-4 border-x-2 border-gray-600">
              Web Developer
            </td>
            <td className="py-2 px-4 border-x-2 border-gray-600">
              Full Time - Remote
            </td>
            <td className="py-2 px-4 border-x-2 border-gray-600">
              <a href="https://www.glassdoor.com/index.htm" target="_blank">
                <BiLinkExternal />
              </a>
            </td>
            <td className="py-2 px-4 border-x-2 border-gray-600">
              <input
                type="checkbox"
                id="myCheckbox"
                className="form-checkbox h-5 w-5 text-indigo-600"
              />
            </td>
          </tr>
          <tr className="bg-white">
            <td className="py-2 px-4 border-x-2 border-gray-600">
              UX Researcher
            </td>
            <td className="py-2 px-4 border-x-2 border-gray-600">
              Contract - On-site
            </td>
            <td className="py-2 px-4 border-x-2 border-gray-600">
              <a href="https://www.glassdoor.com/index.htm" target="_blank">
                <BiLinkExternal />
              </a>
            </td>
            <td className="py-2 px-4 border-x-2 border-gray-600">
              <input
                type="checkbox"
                id="myCheckbox"
                className="form-checkbox h-5 w-5 text-indigo-600"
              />
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="py-2 px-4 border-x-2 border-gray-600">
              Product Manager
            </td>
            <td className="py-2 px-4 border-x-2 border-gray-600">
              Part-time - Remote
            </td>
            <td className="py-2 px-4 border-x-2 border-gray-600">
              <a href="https://www.glassdoor.com/index.htm" target="_blank">
                <BiLinkExternal />
              </a>
            </td>
            <td className="py-2 px-4 border-x-2 border-gray-600">
              <input
                type="checkbox"
                id="myCheckbox"
                className="form-checkbox h-5 w-5 text-indigo-600"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
};

export default Company_info;
