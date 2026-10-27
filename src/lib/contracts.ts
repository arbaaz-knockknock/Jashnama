/** Replaceable service contracts. The preview ships no live adapters or authorization. */
export type WeddingId = 'savage' | 'sample';
export type DemoRole = 'guest' | 'couple' | 'studio';
export type LeadStatus = 'New' | 'Contacted' | 'Discovery' | 'Proposal' | 'Booked' | 'Closed';
export type ProjectStage = 'Pre-production' | 'Coverage' | 'Post-production' | 'Review' | 'Delivered' | 'Archived';
export type UploadState = 'selected' | 'validating' | 'queued' | 'uploading' | 'paused' | 'uploaded-unverified' | 'verified' | 'failed' | 'canceled';
export type ProcessingState = 'queued' | 'processing' | 'ready' | 'failed';
export type PublicationState = 'draft' | 'published' | 'hidden' | 'expired';
export type ModerationState = 'pending' | 'approved' | 'rejected';
export type SearchState = 'processing' | 'partial' | 'complete' | 'no-matches' | 'unavailable' | 'expired';
export interface WeddingEvent { id: string; weddingId: WeddingId; name: string; startAt?: string; endAt?: string; venue?: string; dressCode?: string; }
export interface Wedding { id: WeddingId; title: string; names: string; hashtag: string; city: string; timezone: string; dateLabel: string; fictional: boolean; events: WeddingEvent[]; }
export interface MediaAsset { id: string; weddingId: WeddingId; eventId: string; title: string; source: 'professional' | 'guest'; kind: 'photo' | 'film'; publication: PublicationState; moderation: ModerationState; processing: ProcessingState; image?: string; placeholder: boolean; access: 'shared' | 'family'; createdAt: string; uploaderLabel?: string; channel?: 'web' | 'whatsapp'; }
export interface CreativeBrief { version: number; story: string; narrative: string; music: string; priorities: string; people: string; references: string; lighting: string; approved: boolean; }
export interface WeddingSettings { downloads: boolean; guestUploads: boolean; sharedGallery: boolean; language: 'en' | 'hi'; largeText: boolean; notifications: boolean; }
export interface Enquiry { id: string; label: string; city: string; service: string; status: LeadStatus; weddingId?: WeddingId; synthetic: boolean; }
export interface Task { id: string; title: string; complete: boolean; }
export interface ScopedContext { studioId: string; weddingId: string; actorId: string; requestId: string; }
export interface ApiError { code: 'VALIDATION' | 'ACCESS' | 'UNSUPPORTED_MEDIA' | 'QUOTA' | 'EXPIRED' | 'RATE_LIMIT' | 'TEMPORARY' | 'VERSION_CONFLICT'; message: string; retryAfterSeconds?: number; }
export type ApiResult<T> = { data: T; error?: never; requestId: string } | { data?: never; error: ApiError; requestId: string };
export interface Page<T> { items: T[]; nextCursor?: string; }
export interface JobReceipt { jobId: string; status: 'accepted' | 'processing' | 'ready' | 'failed' | 'expired'; completed: number; total: number; }
export interface MediaQuery { eventId?: string; source?: MediaAsset['source']; kind?: MediaAsset['kind']; albumId?: string; cursor?: string; limit: number; sort: 'newest' | 'oldest'; }
export interface FileDeclaration { clientId: string; name: string; mime: string; bytes: number; checksum: string; durationSeconds?: number; }
export interface UploadSession { id: string; expiresAt: string; files: Array<{ clientId: string; state: UploadState; partUrls?: Array<{ part: number; url: string }> }>; }
export interface FaceSearchReceipt extends JobReceipt { searchedPartitions: number; totalPartitions: number; media: MediaAsset[]; expiresAt: string; }
export interface Review { id: string; deliverableId: string; version: number; state: 'internal-review' | 'couple-review' | 'approved' | 'published'; comments: Array<{ id: string; body: string; timecodeSeconds?: number }>; }
export interface EnquiryInput { names: string; contact: string; contactMethod: 'email' | 'phone'; date?: string; dateFlexible: boolean; city?: string; services: string[]; priorities?: string; marketingOptIn: boolean; }
export interface PublicService { listPortfolio(cursor?: string): Promise<ApiResult<Page<{ id: string; title: string; approvedForPublicUse: true; posterUrl: string }>>>; submitEnquiry(input: EnquiryInput, idempotencyKey: string): Promise<ApiResult<{ receiptId: string; acceptedAt: string }>>; }
export interface WeddingService {
  exchangeInvitation(token: string): Promise<ApiResult<{ scopedSession: string; expiresAt: string }>>;
  getWedding(context: ScopedContext): Promise<ApiResult<Wedding>>;
  listMedia(context: ScopedContext, query: MediaQuery): Promise<ApiResult<Page<MediaAsset>>>;
  favorite(context: ScopedContext, mediaId: string, selected: boolean): Promise<ApiResult<{ selected: boolean }>>;
  beginUpload(context: ScopedContext, eventId: string, files: FileDeclaration[], idempotencyKey: string): Promise<ApiResult<UploadSession>>;
  completeUpload(context: ScopedContext, sessionId: string, parts: Array<{ part: number; etag: string }>, idempotencyKey: string): Promise<ApiResult<JobReceipt>>;
  abortUpload(context: ScopedContext, sessionId: string): Promise<ApiResult<{ canceled: boolean }>>;
  startFaceSearch(context: ScopedContext, selfie: Blob, consentVersion: string): Promise<ApiResult<FaceSearchReceipt>>;
  getFaceSearch(context: ScopedContext, searchId: string): Promise<ApiResult<FaceSearchReceipt>>;
  requestDownload(context: ScopedContext, mediaIds: string[], quality: 'original' | 'mobile', idempotencyKey: string): Promise<ApiResult<JobReceipt>>;
  reportMedia(context: ScopedContext, mediaId: string, reason: string): Promise<ApiResult<{ reportId: string }>>;
  withdrawConsent(context: ScopedContext, purpose: 'face-search' | 'notifications'): Promise<ApiResult<{ canceledJobs: number }>>;
  requestDeletion(context: ScopedContext, mediaIds: string[]): Promise<ApiResult<JobReceipt>>;
}
export interface CoupleService {
  updateBrief(context: ScopedContext, brief: CreativeBrief, expectedVersion: number): Promise<ApiResult<CreativeBrief>>;
  submitSelections(context: ScopedContext, mediaIds: string[], expectedVersion: number): Promise<ApiResult<{ version: number; status: 'submitted' }>>;
  reviewDeliverable(context: ScopedContext, deliverableId: string, version: number, action: 'comment' | 'approve', comment?: string): Promise<ApiResult<Review>>;
}
export interface StudioService {
  listEnquiries(studioId: string, cursor?: string): Promise<ApiResult<Page<Enquiry>>>;
  updateLead(studioId: string, enquiryId: string, status: LeadStatus): Promise<ApiResult<Enquiry>>;
  convertLead(studioId: string, enquiryId: string, idempotencyKey: string): Promise<ApiResult<{ projectId: string; invitationRequired: true }>>;
  moderate(context: ScopedContext, mediaId: string, action: 'approve' | 'reject' | 'hide' | 'restore' | 'publish', reason?: string): Promise<ApiResult<MediaAsset>>;
  updateSettings(context: ScopedContext, settings: WeddingSettings): Promise<ApiResult<WeddingSettings>>;
  updateStage(context: ScopedContext, stage: ProjectStage): Promise<ApiResult<{ stage: ProjectStage }>>;
}

export interface BriefAttachment { id:string; question:string; name:string; mime:string; bytes:number; url:string; }
export interface CrewPlan { cinematographers:number; photographers:number; droneOperators:number; creativeProducers:number; lineProducers:number; notes:string; }
export interface FeedbackItem { id:string; author:'couple'|'studio'; body:string; timecode:string; version:number; resolved:boolean; }
export interface Deliverable { id:string; title:string; kind:'film'|'photo'; version:number; status:'Awaiting upload'|'Ready for review'|'Changes requested'|'Approved'; comments:FeedbackItem[]; }
