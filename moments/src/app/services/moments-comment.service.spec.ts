import { TestBed } from '@angular/core/testing';

import { MomentsCommentService } from './moments-comment.service';

describe('MomentsCommentService', () => {
  let service: MomentsCommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MomentsCommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
