import { connect } from "react-redux";
import Instruments from "components/Instruments";
import { fetchDrinksBySpirit } from "store/actions/drinks";

const mapStateToProps = ({ drinks, status }) => ({
  drinks,
  status
});
const mapDispatchToProps = { fetchDrinksBySpirit };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Instruments);
