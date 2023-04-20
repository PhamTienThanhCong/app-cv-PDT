export type ECGJobCandidate = {
  id: number;
  jobId: number;
  candidateId: number;
  cvId: number;
  status: string;
  createdAt?: string;
  updatedAt?: string;
};

export type ECGCandidate = {
  id: number;
  studentCode: string; // Mã sinh viên
  code: string; // Mã ứng viên

  avatar: string;
  firstName: string; // Tên ứng viên
  lastName: string; // Tên ứng viên
  birthday: string; // Ngày/Tháng/Năm sinh
  gender: string; // Giới tính
  phone: string; // Số điện thoại
  email: string; // Email
  address: string; // Địa chỉ
  majorCode: string; // Mã ngành học
  majorName: string; // Ngành học

  candidateCvs: ECGCandidateCV[];
  jobs: ECGJobCandidate[];

  createdAt?: string;
  updatedAt?: string;
};

export type ECGCandidateCV = {
  id: number;
  candidateId: number; // Mã sinh viên
  code: string; // Mã hồ sơ

  avatar: string;
  firstName: string; // Tên ứng viên
  lastName: string; // Tên ứng viên
  birthday: string; // Ngày/Tháng/Năm sinh
  gender: string; // Giới tính
  phone: string; // Số điện thoại
  email: string; // Email
  address: string; // Địa chỉ
  majorName: string; // Trình độ học vấn// Trường đang theo học
  majorCode: string; // Ngành học

  files: string[];
  links: CVCandidateLink[];

  jobs: ECGJobCandidate[];

  // Giới thiệu (richtext)
  intro: string;

  // Học vấn
  education?: CVAchievementType[];

  // Kinh nghiệm làm việc
  experience: CVAchievementType[];

  // Kỹ năng
  skills: CVSkillType[];

  // Chứng chỉ/giải thưởng
  achievements: CVAchievementType[];

  // Dự án
  projects: CVAchievementType[];

  createdAt?: string;
  updatedAt?: string;
};

export type CVCandidateLink = {
  label: string;
  link: string;
};

export type CVAchievementType = {
  title: string;
  subtitle?: string;
  startTime: string | Date | null; // Thời gian bắt đầu
  endTime?: string | Date | null; // Thời gian kết thúc
  description: string; // Mô tả chi tiết
  links?: string;
};

export type CVSkillType = {
  name: string; // Tên kỹ năng
  level?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10; // Đánh giá (1-10)
  description: string; // Mô tả chi tiết
};
