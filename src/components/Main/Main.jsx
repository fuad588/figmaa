import React from "react";
import { Button, Input, Select } from "antd";
import Mainimg from "./img/Group52.svg"
import { ArrowRightOutlined, SearchOutlined } from "@ant-design/icons";
const { Option } = Select;
const Main = () => {
  return (
    <div className="flex flex-wrap justify-center items-center h-80 w-full">
      <div>
        <div className="text-center gap-4 mt-24">
          <h1 className="font-bold text-5xl">
            Use Domain Finder to find unique domains!
          </h1>
          <p>
            Millions of people are searching for companies, domains, meta tags,
            company names and etc., on Domain finder. Try today! 1 000 000 data
            for your search.
          </p>
        </div>
        <div>
          <Input.Group compact className="flex">
            <Select placeholder="Resources">
              <Option value="Option1">Only domain</Option>
              <Option value="Option2">Other options</Option>
            </Select>
            <Input style={{ width: "50%" }} defaultValue="Adobe" />
            <Button
              icon={<SearchOutlined />}
              className="flex justify-center items-center p-0"
            />
          </Input.Group>
        </div>
      </div>
      <div className="flex w-4/5 mt-40">
        <div className="w-3/5">
          <h1 className="font-bold text-5xl mb-10">Use Domain Finder to find unique domains!</h1>
          <p className="mb-32 text-xl">
            Millions of people are searching for companies, domains, meta tags,
            company names and etc., on Domain finder. Try today! 1 000 000 data
            for your search.
          </p>
          <div className="flex">
            <div className="flex gap-5 justify-center w-1/3">
              <div className="rounded-full bg-green-500 w-8 h-8 text-white text-center inline-block">1</div>
              <span>Type to search</span>
              <ArrowRightOutlined />
            </div>
            <div className="flex gap-5 justify-center w-1/3">
              <div className="rounded-full bg-green-500 w-8 h-8 text-white text-center inline-block">2</div>
              <span>Find domains</span>
              <ArrowRightOutlined />
            </div>
            <div className="flex gap-5 justify-center w-1/3">
              <div className="rounded-full bg-green-500 w-8 h-8 text-white text-center inline-block">3</div>
              <span>Filter them</span>
            </div>
          </div>
        </div>
        <div className="w-2/5">
          <img src={Mainimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;
