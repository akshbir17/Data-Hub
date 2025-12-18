import { Subject } from './types';

export const SUBJECTS: Subject[] = [
  {
    id: 'maths',
    name: 'Mathematics for Data Science',
    code: 'BMATS301',
    description: 'Comprehensive resources and syllabus for Mathematics for Computer Science/Data Science.',
    topics: [
      'Mathematics Complete Course Material'
    ],
    color: 'bg-blue-500',
    resources: [
      { title: 'Access Full VTU Circle Course', type: 'LINK', url: 'https://vtucircle.com/mathematics-for-computer-science-bcs301/' }
    ]
  },
  {
    id: 'ddco',
    name: 'Digital Design & Computer Org.',
    code: 'BCS302',
    description: 'Hardware layer of computing, from logic gates to full system architecture.',
    topics: ['Logic Gates', 'Verilog HDL', 'ISA', 'Memory Hierarchy'],
    color: 'bg-purple-500',
    resources: [
      { title: 'Computer Architecture Notes', type: 'PDF', url: '#' }
    ]
  },
  {
    id: 'dsa',
    name: 'Data Structures & Algorithms',
    code: 'BCS305',
    description: 'Efficiency in problem solving through optimized data management.',
    topics: ['Graph Theory', 'Dynamic Programming', 'B-Trees', 'Sorting'],
    color: 'bg-emerald-500',
    resources: [
      { title: 'DSA Master Sheet', type: 'PDF', url: '#' }
    ]
  },
  {
    id: 'os',
    name: 'Operating Systems',
    code: 'BCS303',
    description: 'Resource management and kernel-level service implementations.',
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
    description: 'Statistical computing environment for high-end data visualization.',
    topics: ['Tidyverse', 'ggplot2', 'Statistical Modeling', 'Shiny'],
    color: 'bg-indigo-500',
    resources: [
      { title: 'R Statistical Analysis Guide', type: 'PDF', url: '#' }
    ]
  }
];