const ActiveGameComponent = {
    template: `<div class="main-container">
    <div class="ui segments">
        <div class="ui segment">
            <div class="ui two column center aligned grid">
                <div class="ui vertical divider inverted">VS</div>
                <div class="ui item column red">
                    <i class="ui icon large icon-sisters-of-battle"></i> Sisters of Battle
                </div>
                <div class="ui item column red">
                    <i class="ui icon large icon-iron-hands"></i> Iron Hands
                </div>
            </div>
        </div>
        <div class="ui segment attached inverted">
        <div class="ui vertical divider fitted inverted"></div>
            <div class="ui two statistics inverted">
                <div class="statistic">
                    <div class="value">10</div>
                    <div class="label">George</div>
                </div>
                <div class="statistic">
                    <div class="value">10</div>
                    <div class="label">Kyle</div>
                </div>
            </div>
            <div class="ui grid ">
                <div class="eight wide column">
                    <div class="ui two buttons inverted">
                        <button class="ui button icon inverted">
                            <i class="ui icon minus"></i>
                        </button>
                        <div class="or"></div>
                        <button class="ui button icon inverted">
                            <i class="ui icon plus"></i>
                        </button>
                    </div>
                </div>

                <div class="eight wide column">
                    <div class="ui two buttons inverted">
                        <button class="ui button icon inverted">
                            <i class="ui icon minus"></i>
                        </button>
                        <div class="or"></div>
                        <button class="ui button icon inverted">
                            <i class="ui icon plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <h4 class="ui horizontal divider header">
        <i class="icon icon-bolter-mkv"></i>
        Details
    </h4>
    <div class="ui two column grid">
        <div class="row">
            <div class="column">
                <h5>Command Points:</h5>
                <div class="ui one statistics">
                    <div class="statistic">
                        <div class="value">8</div>
                        <div class="label">of 12</div>
                    </div>
                    <div class="ui two buttons">
                        <button class="ui button icon">
                            <i class="ui icon minus"></i>
                        </button>
                        <div class="or"></div>
                        <button class="ui button icon">
                            <i class="ui icon plus"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="column">
            <h5>Command Points:</h5>
            <div class="ui one statistics">
                <div class="statistic">
                    <div class="value">8</div>
                    <div class="label">of 12</div>
                </div>
                <div class="ui two buttons">
                    <button class="ui button icon">
                        <i class="ui icon minus"></i>
                    </button>
                    <div class="or"></div>
                    <button class="ui button icon">
                        <i class="ui icon plus"></i>
                    </button>
                </div>
            </div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <h5>Primary Objectives:</h5>
                <div class="ui middle aligned divided list">
                    <div class="item">
                        <div class="right floated content">
                            <button class="ui button icon mini">
                                <i class="minus icon"></i>
                            </button>
                            0
                            <button class="ui button icon mini">
                                <i class="plus icon"></i>
                            </button>
                        </div>
                        <div class="middle aligned content">
                            Kill 1
                        </div>
                    </div>
                    <div class="item">
                        <div class="right floated content">
                            <button class="ui button icon mini">
                                <i class="minus icon"></i>
                            </button>
                            0
                            <button class="ui button icon mini">
                                <i class="plus icon"></i>
                            </button>
                        </div>
                        <div class="middle aligned content">
                            Kill More
                        </div>
                    </div>
                    <div class="item">
                        <div class="right floated content">
                            <button class="ui button icon mini">
                                <i class="minus icon"></i>
                            </button>
                            0
                            <button class="ui button icon mini">
                                <i class="plus icon"></i>
                            </button>
                        </div>
                        <div class="middle aligned content">
                            Obj. 1
                        </div>
                    </div>
                    <div class="item">
                        <div class="right floated content">
                            <button class="ui button icon mini">
                                <i class="minus icon"></i>
                            </button>
                            0
                            <button class="ui button icon mini">
                                <i class="plus icon"></i>
                            </button>
                        </div>
                        <div class="middle aligned content">
                            Obj. More
                        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <h5>Primary Objectives:</h5>
                <div class="ui middle aligned divided list">
                    <div class="item">
                        <div class="right floated content">
                            <button class="ui button icon mini">
                                <i class="minus icon"></i>
                            </button>
                            0
                            <button class="ui button icon mini">
                                <i class="plus icon"></i>
                            </button>
                        </div>
                        <div class="middle aligned content">
                            Kill 1
                        </div>
                    </div>
                    <div class="item">
                        <div class="right floated content">
                            <button class="ui button icon mini">
                                <i class="minus icon"></i>
                            </button>
                            0
                            <button class="ui button icon mini">
                                <i class="plus icon"></i>
                            </button>
                        </div>
                        <div class="middle aligned content">
                            Kill More
                        </div>
                    </div>
                    <div class="item">
                        <div class="right floated content">
                            <button class="ui button icon mini">
                                <i class="minus icon"></i>
                            </button>
                            0
                            <button class="ui button icon mini">
                                <i class="plus icon"></i>
                            </button>
                        </div>
                        <div class="middle aligned content">
                            Obj. 1
                        </div>
                    </div>
                    <div class="item">
                        <div class="right floated content">
                            <button class="ui button icon mini">
                                <i class="minus icon"></i>
                            </button>
                            0
                            <button class="ui button icon mini">
                                <i class="plus icon"></i>
                            </button>
                        </div>
                        <div class="middle aligned content">
                            Obj. More
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <h5>Secondary Objectives:</h5>
                <div class="ui middle aligned divided list">
                    <div class="item">
                        <div class="right floated content">
                            <button class="ui button icon mini">
                                <i class="minus icon"></i>
                            </button>
                            0
                            <button class="ui button icon mini">
                                <i class="plus icon"></i>
                            </button>
                        </div>
                        <div class="middle aligned content">
                            Headhunter
                        </div>
                    </div>
                    <div class="item">
                        <div class="right floated content">
                            <button class="ui button icon mini">
                                <i class="minus icon"></i>
                            </button>
                            0
                            <button class="ui button icon mini">
                                <i class="plus icon"></i>
                            </button>
                        </div>
                        <div class="middle aligned content">
                            Kingslayer
                        </div>
                    </div>
                    <div class="item">
                        <div class="right floated content">
                            <button class="ui button icon mini">
                                <i class="minus icon"></i>
                            </button>
                            0
                            <button class="ui button icon mini">
                                <i class="plus icon"></i>
                            </button>
                        </div>
                        <div class="middle aligned content">
                            Old School
                        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <h5>Secondary Objectives:</h5>
                <div class="ui middle aligned divided list">
                    <div class="item">
                        <div class="right floated content">
                            <button class="ui button icon mini">
                                <i class="minus icon"></i>
                            </button>
                            0
                            <button class="ui button icon mini">
                                <i class="plus icon"></i>
                            </button>
                        </div>
                        <div class="middle aligned content">
                            Engineers
                        </div>
                    </div>
                    <div class="item">
                        <div class="right floated content">
                            <button class="ui button icon mini">
                                <i class="minus icon"></i>
                            </button>
                            0
                            <button class="ui button icon mini">
                                <i class="plus icon"></i>
                            </button>
                        </div>
                        <div class="middle aligned content">
                            Marked for Death
                        </div>
                    </div>
                    <div class="item">
                        <div class="right floated content">
                            <button class="ui button icon mini">
                                <i class="minus icon"></i>
                            </button>
                            0
                            <button class="ui button icon mini">
                                <i class="plus icon"></i>
                            </button>
                        </div>
                        <div class="middle aligned content">
                            Behind Enemy Lines
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="ui divider"></div>
    <div class="two ui buttons">
        <div class="ui button basic">Cancel</div>
        <div class="ui button basic red">Finish Game</div>
    </div>
    <div class="ui divider"></div>
    </div>`
};

export { ActiveGameComponent };