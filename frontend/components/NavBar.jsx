import React from 'react';
import { Tabs } from '@rewind-ui/core';

export default function NavBar() {
  return (
    <>
    <Tabs defaultTab="item-1">
      <Tabs.List>
        <Tabs.Tab anchor="tab-1">
          Tab A
        </Tabs.Tab>
        <Tabs.Tab anchor="tab-2">
          Tab B
        </Tabs.Tab>
        <Tabs.Tab anchor="tab-3">
          Tab C
        </Tabs.Tab>
      </Tabs.List>
      
      <Tabs.Content anchor="tab-1">
        Content A
      </Tabs.Content>
      <Tabs.Content anchor="tab-2">
        Content B
      </Tabs.Content>
      <Tabs.Content anchor="tab-3">
        Content C
      </Tabs.Content>
    </Tabs>

          <nav>
          <div>
            <h1>Dollarz</h1>
            <h3><a href="/">Overview</a></h3>
            <h3><a href="expenses">Expenses</a></h3>
            <h3><a href="categories">Categories</a></h3>
          </div>
        </nav>
    </>
  );
}