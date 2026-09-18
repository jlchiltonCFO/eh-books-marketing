# EH Books Portal — Waitlist and Follow-Up Handoff

```json
{
  "context_type": "EH Books Portal Waitlist UX and Follow-Up Handoff",
  "as_of_date": "2026-09-18",
  "target_application": {
    "name": "EH Books Portal",
    "production_origin_when_ready": "https://books.enrollhere.vip",
    "builder": "Lovable",
    "lovable_project_id": "f28dbef8-4517-4637-af9d-ad8339398a77",
    "published": false
  },
  "scope_boundary": {
    "included": [
      "VIP access request form",
      "Submission success state",
      "Waitlist request persistence",
      "Internal review status",
      "Notification event preparation",
      "Future confirmation and personal follow-up emails"
    ],
    "excluded": [
      "Public marketing content on enrollhere.vip",
      "Changes to EH OS - Finance",
      "Use of the EH OS - Finance database",
      "Live email delivery before launch gates are satisfied",
      "Automatic approval of pilot applicants"
    ]
  },
  "primary_goal": "Make the VIP request experience concise, credible and personal. After a visitor submits enough information for eligibility review, do not ask them to send the same information again by email.",
  "requested_user_flow": [
    {
      "step": 1,
      "name": "Request access",
      "requirements": [
        "Capture the minimum information needed for eligibility review",
        "Allow an optional free-text field for additional context",
        "Use clear consent and privacy language",
        "Prevent duplicate submissions where practical"
      ]
    },
    {
      "step": 2,
      "name": "Persist request",
      "requirements": [
        "Store the request server-side",
        "Create an auditable status event",
        "Set the initial status to received or pending_review",
        "Do not imply acceptance or guaranteed access"
      ]
    },
    {
      "step": 3,
      "name": "Show confirmation",
      "requirements": [
        "Display the message: We received your VIP access request.",
        "Explain that the EH Books team will review eligibility and follow up",
        "Remove any redundant Email us button",
        "Do not ask the applicant to repeat information already submitted"
      ]
    },
    {
      "step": 4,
      "name": "Prepare notifications",
      "requirements": [
        "Create notification_events or equivalent queued records",
        "Keep delivery disabled until email configuration and launch approval are complete",
        "Make retry behavior idempotent",
        "Record template version and delivery state"
      ]
    },
    {
      "step": 5,
      "name": "Review and invitation",
      "requirements": [
        "Allow staff to review, approve, decline or request clarification",
        "Only approved applicants may receive an onboarding invitation",
        "Continue approved applicants into the existing invite-only onboarding flow"
      ]
    }
  ],
  "success_state_copy": {
    "headline": "We received your VIP access request.",
    "body": "Our EH Books team will review your information and follow up with next steps. If you are invited to participate, you will receive a secure link to continue onboarding.",
    "primary_action": "Return to EnrollHere",
    "primary_action_url": "https://enrollhere.vip",
    "actions_to_remove": [
      "Email us",
      "Submit another request"
    ]
  },
  "future_email_sequence": [
    {
      "sequence": 1,
      "type": "transactional_confirmation",
      "from": "Configured EH Books sender",
      "subject": "We received your EH Books VIP access request",
      "purpose": "Confirm receipt and explain the review process",
      "style": "Concise branded transactional email"
    },
    {
      "sequence": 2,
      "type": "personal_follow_up",
      "from": "A named EH Books team member at an approved enrollhere.vip address",
      "reply_to": "The same named team member or an approved monitored mailbox",
      "purpose": "Create a direct human relationship and invite questions",
      "style": "Plain text, conversational and visibly written as a person",
      "draft_body": "Hi {{first_name}},\n\nWe received your request for EH Books VIP access. You should also have received a confirmation explaining what happens next on our end. In the meantime, if you have any questions, reply directly to this email and I will be glad to help.\n\n{{sender_name}}"
    }
  ],
  "honesty_and_safety_rules": [
    "Do not simulate a successful email send",
    "Do not state that an applicant has been accepted before staff approval",
    "Do not expose service-role keys, tokens or private applicant data in the client",
    "Do not allow public self-signup into the customer portal",
    "Do not enable billing, charges, QuickBooks success states or production launch as part of this work",
    "Do not use a personal sender identity unless the address, reply handling and authorization are confirmed"
  ],
  "current_launch_gates_to_preserve": {
    "email_sending_enabled": false,
    "customer_domain_verified": false,
    "launch_approved": false,
    "order_form_approved": false,
    "billing_api_configured": false,
    "intuit_credentials_configured": false,
    "github_repo_connected": false
  },
  "implementation_notes": {
    "preferred_pattern": "Implement the form, server-side persistence, status model and queued notification events first. Render previewable email content for staff testing, but do not invoke a live provider.",
    "suggested_request_states": [
      "received",
      "pending_review",
      "clarification_requested",
      "approved",
      "declined",
      "invitation_issued"
    ],
    "suggested_validation": [
      "Required-field validation",
      "Normalized email address",
      "Server-side duplicate check",
      "Rate limiting or abuse protection",
      "Accessible error and success messages",
      "Mobile layout verification"
    ]
  },
  "acceptance_criteria": [
    "A visitor can submit a VIP access request from books.enrollhere.vip",
    "The submission is persisted once and creates an audit/status event",
    "The confirmation page contains no redundant email CTA",
    "The success copy does not imply acceptance",
    "Two notification events can be previewed without sending email",
    "Staff can review the request and determine the next state",
    "No production launch gate is changed by this implementation"
  ]
}
```
