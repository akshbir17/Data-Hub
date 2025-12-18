
import { Subject } from './types';

export const SUBJECTS: Subject[] = [
  {
    id: 'maths',
    name: 'Mathematics for Data Science',
    code: 'BMATS301',
    description: 'Core statistical and probabilistic foundations for advanced data analysis.',
    topics: ['Probability Theory', 'Markov Chains', 'Statistical Inference', 'ANOVA'],
    color: 'bg-blue-500',
    resources: [
      { title: 'Module 1: Probability Theory (Random Variables)', type: 'PDF', url: '/pdfs/math-mod1.pdf' },
      { title: 'Module 2: Joint Probability & Markov Chains', type: 'PDF', url: '/pdfs/math-mod2.pdf' },
      { title: 'Module 3: Statistical Inference - I (Sampling)', type: 'PDF', url: '/pdfs/math-mod3.pdf' },
      { title: 'Module 4: Statistical Inference - II (Distributions)', type: 'PDF', url: '/pdfs/math-mod4.pdf' },
      { title: 'Module 5: Design of Experiments & ANOVA', type: 'PDF', url: '/pdfs/math-mod5.pdf' }
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
