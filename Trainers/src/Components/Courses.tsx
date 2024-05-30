import React, { Component } from 'react';
import { BACourses, PECourses, QACourses } from "./Data";
import { Course, IAssignesCourses, UserDetailsDialogProp } from "./Interface";
import "../Components/UserDetailsDilaog.css"; 

class UserDetailsDialog extends Component<UserDetailsDialogProp, IAssignesCourses> {
    constructor(props: UserDetailsDialogProp) {
        super(props);
        this.state = {
            selectedCourses: []
        };
    }

    handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, courseName: string) => {
        const isChecked = event.target.checked;
        const { selectedCourses } = this.state;
        if (isChecked) {
            this.setState({
                selectedCourses: [...selectedCourses, courseName]
            });
        } else {
            this.setState({
                selectedCourses: selectedCourses.filter(course => course !== courseName)
            });
        }
    };

    assignCourses = () => {
        console.log(this.state.selectedCourses);
    }

    render() {
        let courses: Course[] = [];
        switch (this.props.user.role) {
            case "PE":
                courses = PECourses;
                break;
            case "BA":
                courses = BACourses;
                break;
            case "QA":
                courses = QACourses;
                break;
            default:
                break;
        }

        return (
            <div className="user-details-popup-container">
                <div className="user-details-popup">
                    <div className="user-details">
                        <span className="close-button" onClick={this.props.onClose}>×</span>
                        <h2>User Details</h2>
                        <p><strong>Name:</strong> {this.props.user.name}</p>
                        <p><strong>Username:</strong> {this.props.user.username}</p>
                        <p><strong>Email:</strong> {this.props.user.mail}</p>
                        <p><strong>Role:</strong> {this.props.user.role}</p>
                        <p><strong>Courses:</strong></p>
                        <ul>
                            {courses.map(course => (
                                <li key={course.name}>
                                    <label className="d-flex courses">
                                        <input
                                            className="px-2"
                                            type="checkbox"
                                            onChange={(event) => this.handleCheckboxChange(event, course.name)}
                                        />
                                        <div>
                                            {course.name}
                                        </div>
                                    </label>
                                </li>
                            ))}
                        </ul>
                        <div className="user-buttons d-flex px-2">
                            <button className="px-3 py-2 mx-2 border rounded" type="button" onClick={this.assignCourses}>Assign Courses</button>
                            <button className="px-3 mx-2 border rounded" type="button">Show Statistics</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserDetailsDialog;
