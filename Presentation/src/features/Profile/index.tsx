import React from 'react';
import UserAvatar from '../../assets/images/owner.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faVk } from '@fortawesome/free-brands-svg-icons';
import './Profile.css';

export const ProfilePage: React.FC = () => {
  return (
    <>
      <div className="card main-content">
        <div className="card mb-4">
          <div className="card-body d-flex flex-column flex-md-row align-items-md-center justify-content-between">
            <div className="d-flex align-items-center mb-3 mb-md-0">
              <img src={UserAvatar} alt="User" className="profile-avatar me-3" />
              <div>
                <h5 className="mb-1">Alexander Groshev</h5>
                <p className="mb-0 text-muted">C# Developer • Russia, Saint-Petersburg</p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <div className="social-icons d-flex gap-2">
                <button className="btn btn-outline-secondary">
                  <FontAwesomeIcon icon={faInstagram} />
                </button>
                <button className="btn btn-outline-secondary">
                  <FontAwesomeIcon icon={faVk} />
                </button>
                <button className="btn btn-outline-secondary">
                  <FontAwesomeIcon icon={faGithub} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="fw-bold mb-0">Personal Information</h6>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <small className="text-muted">First Name</small>
                <p className="mb-0">Alexander</p>
              </div>
              <div className="col-md-6 mb-3">
                <small className="text-muted">Last Name</small>
                <p className="mb-0">Groshev</p>
              </div>
              <div className="col-md-6 mb-3">
                <small className="text-muted">Email address</small>
                <p className="mb-0">gav.groshev@gmail.com</p>
              </div>
              <div className="col-md-6 mb-3">
                <small className="text-muted">Phone</small>
                <p className="mb-0">+7 900 636 19 69</p>
              </div>
              <div className="col-12">
                <small className="text-muted">Bio</small>
                <p className="mb-0">C# Developer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-4">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="fw-bold mb-0">Personal Information</h6>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <small className="text-muted">First Name</small>
                <p className="mb-0">Alexander</p>
              </div>
              <div className="col-md-6 mb-3">
                <small className="text-muted">Last Name</small>
                <p className="mb-0">Groshev</p>
              </div>
              <div className="col-md-6 mb-3">
                <small className="text-muted">Email address</small>
                <p className="mb-0">gav.groshev@gmail.com</p>
              </div>
              <div className="col-md-6 mb-3">
                <small className="text-muted">Phone</small>
                <p className="mb-0">+7 900 636 19 69</p>
              </div>
              <div className="col-12">
                <small className="text-muted">Bio</small>
                <p className="mb-0">C# Developer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="fw-bold mb-0">Address</h6>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <small className="text-muted">Country</small>
                <p className="mb-0">Russia</p>
              </div>
              <div className="col-md-6 mb-3">
                <small className="text-muted">City/State</small>
                <p className="mb-0">Saint-Petersburg</p>
              </div>
              <div className="col-md-6 mb-3">
                <small className="text-muted">Postal Code</small>
                <p className="mb-0">ERT 2489</p>
              </div>
              <div className="col-md-6 mb-3">
                <small className="text-muted">TAX ID</small>
                <p className="mb-0">AS4568384</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
