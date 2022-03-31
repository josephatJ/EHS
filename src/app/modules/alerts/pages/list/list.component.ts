import { Component, OnInit } from '@angular/core';

export interface AlertData {
  subject: string;
  dataItem: string;
  dataValue: number;
  read: boolean;
  falseAlert: boolean;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['dataItem', 'dataValue', 'subject'];
  dataSource: AlertData[] = [
    {
      subject: 'Above Range',
      dataItem: 'Maternal deaths under 5',
      dataValue: 200,
      read: false,
      falseAlert: null,
    },
    {
      subject: 'Extremely Low',
      dataItem: 'IPTp2 doses among pregnant women',
      dataValue: 1201,
      read: false,
      falseAlert: null,
    },
    {
      subject: 'Extremely Low',
      dataItem: 'Number of admissions for pneumonia',
      dataValue: 612,
      read: true,
      falseAlert: false,
    },
    {
      subject: 'Above Range',
      dataItem: 'Number of admissions in intensive care unit',
      dataValue: 993,
      read: true,
      falseAlert: true,
    },
    {
      subject: 'Above Range',
      dataItem: 'Maternal deaths under 5',
      dataValue: 37,
      read: true,
      falseAlert: false,
    },
    {
      subject: 'Above Range',
      dataItem: 'Maternal deaths under 5',
      dataValue: 1234,
      read: true,
      falseAlert: false,
    },
    {
      subject: 'Above Range',
      dataItem: 'Maternal deaths under 5',
      dataValue: 200,
      read: true,
      falseAlert: false,
    },
    {
      subject: 'Extremely Low',
      dataItem: 'IPTp2 doses among pregnant women',
      dataValue: 1201,
      read: true,
      falseAlert: false,
    },
    {
      subject: 'Extremely Low',
      dataItem: 'Number of admissions for pneumonia',
      dataValue: 612,
      read: true,
      falseAlert: false,
    },
    {
      subject: 'Above Range',
      dataItem: 'Number of admissions in intensive care unit',
      dataValue: 993,
      read: true,
      falseAlert: false,
    },
    {
      subject: 'Above Range',
      dataItem: 'Maternal deaths under 5',
      dataValue: 37,
      read: true,
      falseAlert: false,
    },
    {
      subject: 'Above Range',
      dataItem: 'Maternal deaths under 5',
      dataValue: 1234,
      read: true,
      falseAlert: false,
    },
    {
      subject: 'Above Range',
      dataItem: 'Maternal deaths under 5',
      dataValue: 200,
      read: true,
      falseAlert: false,
    },
    {
      subject: 'Extremely Low',
      dataItem: 'IPTp2 doses among pregnant women',
      dataValue: 1201,
      read: true,
      falseAlert: false,
    },
    {
      subject: 'Extremely Low',
      dataItem: 'Number of admissions for pneumonia',
      dataValue: 612,
      read: true,
      falseAlert: false,
    },
    {
      subject: 'Above Range',
      dataItem: 'Number of admissions in intensive care unit',
      dataValue: 993,
      read: true,
      falseAlert: false,
    },
    {
      subject: 'Above Range',
      dataItem: 'Maternal deaths under 5',
      dataValue: 37,
      read: true,
      falseAlert: false,
    },
    {
      subject: 'Above Range',
      dataItem: 'Maternal deaths under 5',
      dataValue: 1234,
      read: true,
      falseAlert: false,
    },
    {
      subject: 'Above Range',
      dataItem: 'Maternal deaths under 5',
      dataValue: 200,
      read: true,
      falseAlert: false,
    },
    {
      subject: 'Extremely Low',
      dataItem: 'IPTp2 doses among pregnant women',
      dataValue: 1201,
      read: true,
      falseAlert: false,
    },
    {
      subject: 'Extremely Low',
      dataItem: 'Number of admissions for pneumonia',
      dataValue: 612,
      read: true,
      falseAlert: false,
    },
    {
      subject: 'Above Range',
      dataItem: 'Number of admissions in intensive care unit',
      dataValue: 993,
      read: true,
      falseAlert: false,
    },
    {
      subject: 'Above Range',
      dataItem: 'Maternal deaths under 5',
      dataValue: 37,
      read: true,
      falseAlert: false,
    },
    {
      subject: 'Above Range',
      dataItem: 'Maternal deaths under 5',
      dataValue: 1234,
      read: true,
      falseAlert: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
