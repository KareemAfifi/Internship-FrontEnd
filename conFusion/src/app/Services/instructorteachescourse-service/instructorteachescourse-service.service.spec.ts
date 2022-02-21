import { TestBed } from '@angular/core/testing';

import { InstructorteachescourseServiceService } from './instructorteachescourse-service.service';

describe('InstructorteachescourseServiceService', () => {
  let service: InstructorteachescourseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstructorteachescourseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
