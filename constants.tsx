
import { Subject } from './types';

export const SUBJECTS: Subject[] = [
  {
    id: 'maths',
    name: 'Mathematics for Data Science',
    code: 'BMATS301',
    description: 'Foundational mathematics including Probability Theory, Joint Probability, and Statistical Inference.',
    topics: ['Probability Theory', 'Markov Chains', 'Statistical Inference', 'ANOVA'],
    color: 'bg-blue-500',
    resources: [
      { title: 'Module 1: Probability Theory (Random Variables)', type: 'PDF', url: '#' },
      { title: 'Module 2: Joint Probability & Markov Chains', type: 'PDF', url: '#' },
      { title: 'Module 3: Statistical Inference - I (Sampling)', type: 'PDF', url: '#' },
      { title: 'Module 4: Statistical Inference - II (Distributions)', type: 'PDF', url: '#' },
      { title: 'Module 5: Design of Experiments & ANOVA', type: 'PDF', url: '#' }
    ]
  },
  {
    id: 'ddco',
    name: 'Digital Design & Computer Org.',
    code: 'BCS302',
    description: 'Understanding the hardware layer of computing, from logic gates to full system architecture.',
    topics: ['Logic Gates', 'Verilog HDL', 'Instruction Set Architecture', 'Memory Hierarchy'],
    color: 'bg-purple-500',
    resources: [
      { title: 'Computer Architecture Notes', type: 'PDF', url: '#' }
    ]
  },
  {
    id: 'dsa',
    name: 'Data Structures & Algorithms',
    code: 'BCS305',
    description: 'The core of problem solving. Learn to manage data efficiently and build high-performance software.',
    topics: ['Graph Theory', 'Dynamic Programming', 'B-Trees', 'Sorting & Searching'],
    color: 'bg-emerald-500',
    resources: [
      { title: 'DSA Master Sheet', type: 'PDF', url: '#' }
    ]
  },
  {
    id: 'os',
    name: 'Operating Systems',
    code: 'BCS303',
    description: 'Exploration of system software that manages hardware resources and provides common services.',
    topics: ['Process Scheduling', 'Virtual Memory', 'Deadlocks', 'File Systems'],
    color: 'bg-orange-500',
    resources: [
      { title: 'OS Kernel Fundamentals', type: 'PDF', url: '#' }
    ]
  },
  {
    id: 'r-lang',
    name: 'R Programming',
    code: 'BDS306C',
    description: 'A language and environment for statistical computing and graphics, widely used for data analysis.',
    topics: ['Tidyverse', 'ggplot2', 'Statistical Modeling', 'Shiny Apps'],
    color: 'bg-indigo-500',
    resources: [
      { title: 'R Statistical Analysis Guide', type: 'PDF', url: '#' }
    ]
  }
];
