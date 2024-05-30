import React from "react";
import "./Roles.css";
import { BACourses, PECourses, QACourses, staticUsers } from "./Data";
import { Course, State, User } from "./Interface";
import RenderUsersByRole from "./Traines";
import UserDetailsDialog from "./Courses";

class Roles extends React.Component<{}, State> {
    state: State = {
        selectedRole: null,
        selectedUser: null,
        isDialogOpen: false,
        selectedCourses: []
    };

    handleRoleClick = (role: string) => {
        this.setState(prevState => ({
            selectedRole: prevState.selectedRole === role ? null : role,
        }));
    };

    handleUserClick = (user: User) => {
        this.setState({ selectedUser: user, isDialogOpen: true });
    };

    handleCloseDialog = () => {
        this.setState({ isDialogOpen: false });
    };

    handlePlusIconClick = (role: string) => {
        let courses: Course[] = [];
        switch (role) {
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
        this.setState({ selectedCourses: courses, isDialogOpen: true });
    };

    renderCoursesDialog = () => {
        const { selectedCourses } = this.state;
        return (
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={this.handleCloseDialog}>&times;</span>
                    <h2>Select Courses</h2>
                    {selectedCourses.map(course => (
                        <div key={course.name}>
                            <input type="checkbox" id={course.name} />
                            <label htmlFor={course.name}>{course.name}</label>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    render() {
        const { selectedRole, selectedUser, isDialogOpen } = this.state;
        return (
            <div>
                <div className="Addcontainer px-5 mt-2 charts">
                    <div className="test">
                        <div className="AddFresher d-flex justify-content-end pie-chart chart ">
                            <div key="PE">
                                <button
                                    className="role-button"
                                    onClick={() => this.handleRoleClick("PE")}
                                >
                                    Project Engineer
                                </button>
                            </div>
                        </div>
                        {selectedRole === "PE" && (
                            <RenderUsersByRole
                                role={selectedRole}
                                staticUsers={staticUsers}
                                handleUserClick={this.handleUserClick}
                                handlePlusIconClick={this.handlePlusIconClick}
                            />
                        )}
                    </div>
                    <div className="test">
                        <div className="AddFresher d-flex justify-content-end pie-chart chart">
                            <div key="BA">
                                <button
                                    className="role-button"
                                    onClick={() => this.handleRoleClick("BA")}
                                >
                                    Business Analyst
                                </button>
                            </div>
                        </div>
                        {selectedRole === "BA" && (
                            <RenderUsersByRole
                                role={selectedRole}
                                staticUsers={staticUsers}
                                handleUserClick={this.handleUserClick}
                                handlePlusIconClick={this.handlePlusIconClick}
                            />)}
                    </div>
                    <div className="test">
                        <div className="AddFresher d-flex justify-content-end pie-chart chart">
                            <div key="QA">
                                <button
                                    className="role-button"
                                    onClick={() => this.handleRoleClick("QA")}
                                >
                                    Quality Assurance
                                </button>
                            </div>
                        </div>
                        {selectedRole === "QA" && (
                            <RenderUsersByRole
                                role={selectedRole}
                                staticUsers={staticUsers}
                                handleUserClick={this.handleUserClick}
                                handlePlusIconClick={this.handlePlusIconClick}
                            />)}
                    </div>
                </div>
                {isDialogOpen && selectedUser && (
                    <UserDetailsDialog
                        user={selectedUser}
                        onClose={this.handleCloseDialog}
                    />
                )}
                {isDialogOpen && !selectedUser && this.renderCoursesDialog()}
            </div>
        );
    }
}

export default Roles;
